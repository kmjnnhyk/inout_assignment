"use strict";
var EPersonality;
(function (EPersonality) {
    EPersonality["E"] = "E";
    EPersonality["I"] = "I";
    EPersonality["S"] = "S";
    EPersonality["N"] = "N";
    EPersonality["T"] = "T";
    EPersonality["F"] = "F";
    EPersonality["P"] = "P";
    EPersonality["J"] = "J";
})(EPersonality || (EPersonality = {}));
var EOption;
(function (EOption) {
    EOption["VERY_DISAGREE"] = "VERY_DISAGREE";
    EOption["DISAGREE"] = "DISAGREE";
    EOption["NEUTRAL"] = "NEUTRAL";
    EOption["AGREE"] = "AGREE";
    EOption["VERY_AGREE"] = "VERY_AGREE";
})(EOption || (EOption = {}));
var EQuestion;
(function (EQuestion) {
    EQuestion["DietForSelfSatisfaction"] = "\uB2E4\uC774\uC5B4\uD2B8\uB294 \uC8FC\uBCC0\uC778\uC758 \uC2DC\uC120\uBCF4\uB2E4\uB294 \uC790\uAE30\uB9CC\uC871\uC744 \uC704\uD574 \uD558\uB294 \uAC70\uB77C\uACE0 \uC0DD\uAC01\uD55C\uB2E4.";
    EQuestion["MotivatedByFutureImage"] = "\uB2E4\uC774\uC5B4\uD2B8\uC5D0 \uC131\uACF5\uD55C \uBBF8\uB798\uC758 \uB0B4 \uBAA8\uC2B5\uC744 \uC0C1\uC0C1\uD574\uBCF4\uBA74 \uB3D9\uAE30\uBD80\uC5EC\uAC00 \uB41C\uB2E4.";
    EQuestion["ComfortInSharedStruggles"] = "\uC0B4\uCA98\uB2E4\uACE0 \uACE0\uBBFC\uD558\uB294 \uCE5C\uAD6C\uB4E4\uC744 \uBCF4\uBA74 \uB098\uB9CC \uADF8\uB7F0 \uAC8C \uC544\uB2C8\uAD6C\uB098 \uC2F6\uC5B4 \uC704\uB85C\uAC00 \uB41C\uB2E4.";
    EQuestion["PreferenceForChoices"] = "\uB2E4\uC774\uC5B4\uD2B8 \uBC29\uBC95\uC744 \uACE0\uB97C \uB54C \uC120\uD0DD\uC9C0\uAC00 \uB2E4\uC591\uD55C \uD3B8\uC774 \uC88B\uB2E4.";
    EQuestion["HomeDeliveryOverCrowdedPlaces"] = "\uC0AC\uB78C\uC774 \uBD90\uBE44\uB294 \uB9DB\uC9D1\uC5D0 \uAC00\uB294 \uAC83\uBCF4\uB2E4 \uC9D1\uC5D0\uC11C \uBC30\uB2EC \uC74C\uC2DD\uC744 \uC2DC\uCF1C\uBA39\uB294 \uAC8C \uC88B\uB2E4.";
    EQuestion["DetailedDietPlanImportance"] = "\uB2E4\uC774\uC5B4\uD2B8\uB97C \uD560 \uB54C \uC138\uC138\uD55C \uC2DD\uB2E8 \uACC4\uD68D\uC740 \uBCC4\uB85C \uC911\uC694\uD558\uC9C0 \uC54A\uB2E4\uACE0 \uC0DD\uAC01\uD55C\uB2E4.";
    EQuestion["HardToRefuseFoodOffer"] = "\uB2E4\uC774\uC5B4\uD2B8 \uC911\uC774\uC9C0\uB9CC \uC9C0\uC778\uC774 \uC74C\uC2DD\uC744 \uAD8C\uD558\uBA74 \uBBF8\uC548\uD55C \uB9C8\uC74C\uC5D0 \uAC70\uC808\uD558\uAE30\uAC00 \uC5B4\uB835\uB2E4.";
    EQuestion["PreferenceForSpontaneousMeals"] = "\uADF8\uB54C\uADF8\uB54C \uC989\uD765\uC801\uC73C\uB85C \uB04C\uB9AC\uB294 \uBA54\uB274\uB97C \uC120\uD0DD\uD574\uC11C \uC2DD\uC0AC\uD558\uB294 \uAC8C \uC88B\uB2E4.";
})(EQuestion || (EQuestion = {}));
const questions = [
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
const userAnswers = [
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
const calculateUserAnswers = (answers) => {
    const statistics = answers.reduce((result, answer) => {
        const targetQuestion = questions.find((question) => question.type === answer.type);
        if (!targetQuestion) {
            throw new Error("Question not found");
        }
        if (answer.selectedOption === EOption.NEUTRAL) {
            return Object.assign({}, result);
        }
        const { disagree: disagreePersonality, agree: agreePersonality } = targetQuestion;
        if (answer.selectedOption === EOption.VERY_DISAGREE) {
            const updatedScore = result[disagreePersonality] + 2;
            return Object.assign(Object.assign({}, result), { [disagreePersonality]: updatedScore });
        }
        if (answer.selectedOption === EOption.DISAGREE) {
            const updatedScore = result[disagreePersonality] + 1;
            return Object.assign(Object.assign({}, result), { [disagreePersonality]: updatedScore });
        }
        if (answer.selectedOption === EOption.AGREE) {
            const updatedScore = result[agreePersonality] + 1;
            return Object.assign(Object.assign({}, result), { [agreePersonality]: updatedScore });
        }
        if (answer.selectedOption === EOption.VERY_AGREE) {
            const updatedScore = result[agreePersonality] + 2;
            return Object.assign(Object.assign({}, result), { [agreePersonality]: updatedScore });
        }
        return Object.assign({}, result);
    }, {
        [EPersonality.E]: 0,
        [EPersonality.I]: 0,
        [EPersonality.N]: 0,
        [EPersonality.S]: 0,
        [EPersonality.T]: 0,
        [EPersonality.F]: 0,
        [EPersonality.P]: 0,
        [EPersonality.J]: 0
    });
    const { E, I, N, S, T, F, P, J } = statistics;
    const extroverted = E - I >= 0 ? "E" : "I";
    const intuition = N - S >= 0 ? "N" : "S";
    const feeling = F - T >= 0 ? "F" : "T";
    const perceiving = P - J >= 0 ? "P" : "J";
    return `${extroverted}${intuition}${feeling}${perceiving}`;
};
alert(calculateUserAnswers(userAnswers));