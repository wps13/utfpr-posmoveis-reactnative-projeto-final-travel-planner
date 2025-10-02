import {
    GoogleGenAI,
} from '@google/genai';

interface IPlanner {
    userInput: string;
}


async function planner({ userInput }: IPlanner) {
    const ai = new GoogleGenAI({
        apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
        thinkingConfig: {
            thinkingBudget: 0,
        },
        systemInstruction: [
            {
                text: `Gostaria que você ajudasse a montar um roteiro de viagens, onde o usuário irá indicar o destino, quantidade de dias e período da viagem, recomendar lugares para ir e para evitar, caso seja inserido um valor de orçamento considerar também antes de sugerir locais. Por exemplo, se um usuário inserir curitiba por 3 dias, pode sugerir usar a linha de turismo, visitar feiras, etc. Evitar sugerir atrações descontinuadas ou que possam ter algum risco, como localizada em regiões perigosas.Evitar pedir informações adicionais.`,
            }
        ],
    };
    const model = 'gemini-2.5-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: userInput,
                },
            ],
        },
    ];
    try {
        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });
        const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        return result;
    } catch (e) {
        return undefined
    }
}


export default planner;