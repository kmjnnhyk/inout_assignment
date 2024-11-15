enum EPersonality {
  E = "E",
  I = "I",
  S = "S",
  N = "N",
  T = "T",
  F = "F",
  P = "P",
  J = "J"
}

enum EOption {
  VERY_DISAGREE = "VERY_DISAGREE",
  DISAGREE = "DISAGREE",
  NEUTRAL = "NEUTRAL",
  AGREE = "AGREE",
  VERY_AGREE = "VERY_AGREE"
}

enum EQuestion {
  DietForSelfSatisfaction = "다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.",
  MotivatedByFutureImage = "다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.",
  ComfortInSharedStruggles = "살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.",
  PreferenceForChoices = "다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.",
  HomeDeliveryOverCrowdedPlaces = "사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.",
  DetailedDietPlanImportance = "다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.",
  HardToRefuseFoodOffer = "다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.",
  PreferenceForSpontaneousMeals = "그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다."
}

type IQuestionItem = {
  disagree: EPersonality;
  agree: EPersonality;
  type: EQuestion;
};

type IUserAnswer = {
  type: EQuestion;
  selectedOption: EOption;
};

const questions: IQuestionItem[] = [
  {
    disagree: EPersonality.E,
    agree: EPersonality.I,
    type: EQuestion.DietForSelfSatisfaction
  },
  {
    disagree: EPersonality.S,
    agree: EPersonality.N,
    type: EQuestion.MotivatedByFutureImage
  },
  {
    disagree: EPersonality.T,
    agree: EPersonality.F,
    type: EQuestion.ComfortInSharedStruggles
  },
  {
    disagree: EPersonality.J,
    agree: EPersonality.P,
    type: EQuestion.PreferenceForChoices
  },
  {
    disagree: EPersonality.E,
    agree: EPersonality.I,
    type: EQuestion.HomeDeliveryOverCrowdedPlaces
  },
  {
    disagree: EPersonality.S,
    agree: EPersonality.N,
    type: EQuestion.DetailedDietPlanImportance
  },
  {
    disagree: EPersonality.T,
    agree: EPersonality.F,
    type: EQuestion.HardToRefuseFoodOffer
  },
  {
    disagree: EPersonality.J,
    agree: EPersonality.P,
    type: EQuestion.PreferenceForSpontaneousMeals
  }
];

const userAnswers: IUserAnswer[] = [
  {
    type: EQuestion.DietForSelfSatisfaction,
    selectedOption: EOption.AGREE
  },
  {
    type: EQuestion.MotivatedByFutureImage,
    selectedOption: EOption.NEUTRAL
  },
  {
    type: EQuestion.ComfortInSharedStruggles,
    selectedOption: EOption.DISAGREE
  },
  {
    type: EQuestion.PreferenceForChoices,
    selectedOption: EOption.VERY_AGREE
  },
  {
    type: EQuestion.HomeDeliveryOverCrowdedPlaces,
    selectedOption: EOption.NEUTRAL
  },
  {
    type: EQuestion.DetailedDietPlanImportance,
    selectedOption: EOption.NEUTRAL
  },
  {
    type: EQuestion.HardToRefuseFoodOffer,
    selectedOption: EOption.VERY_DISAGREE
  },
  {
    type: EQuestion.PreferenceForSpontaneousMeals,
    selectedOption: EOption.NEUTRAL
  }
];

const calculateUserAnswers = (answers: IUserAnswer[]) => {
  const statistics = answers.reduce(
    (result, answer) => {
      const targetQuestion = questions.find(
        (question) => question.type === answer.type
      );

      if (!targetQuestion) {
        throw new Error("Question not found");
      }

      if (answer.selectedOption === EOption.NEUTRAL) {
        return { ...result };
      }

      const {
        disagree: disagreePersonality,
        agree: agreePersonality
      } = targetQuestion;

      if (answer.selectedOption === EOption.VERY_DISAGREE) {
        const updatedScore = result[disagreePersonality] + 2;
        return { ...result, [disagreePersonality]: updatedScore };
      }

      if (answer.selectedOption === EOption.DISAGREE) {
        const updatedScore = result[disagreePersonality] + 1;
        return { ...result, [disagreePersonality]: updatedScore };
      }

      if (answer.selectedOption === EOption.AGREE) {
        const updatedScore = result[agreePersonality] + 1;
        return { ...result, [agreePersonality]: updatedScore };
      }

      if (answer.selectedOption === EOption.VERY_AGREE) {
        const updatedScore = result[agreePersonality] + 2;
        return { ...result, [agreePersonality]: updatedScore };
      }

      return { ...result };
    },
    {
      [EPersonality.E]: 0,
      [EPersonality.I]: 0,
      [EPersonality.N]: 0,
      [EPersonality.S]: 0,
      [EPersonality.T]: 0,
      [EPersonality.F]: 0,
      [EPersonality.P]: 0,
      [EPersonality.J]: 0
    }
  );

  const { E, I, N, S, T, F, P, J } = statistics;
  const extroverted = E - I >= 0 ? "E" : "I";
  const intuition = N - S >= 0 ? "N" : "S";
  const feeling = F - T >= 0 ? "F" : "T";
  const perceiving = P - J >= 0 ? "P" : "J";

  return `${extroverted}${intuition}${feeling}${perceiving}`;
};

alert(calculateUserAnswers(userAnswers));
