import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz(){

    const [questions, setQuestions] = useState([])

    const questionsElements = questions.map(question => <Question key={question.text} {...question} />)

    useEffect(() => {
        const fetchQuestion = async () => {
            try{
                const response = await  fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
                const data = await response.json()
                const formattedData = data.results.map((data) => ({
                        text: decodeHtml(data.question),
                        answers: shuffleArray([...data.incorrect_answers, data.correct_answer])
                    }))
                setQuestions(formattedData)
            }catch (error){
                console.error("Error fetching questions: ", error)
            }
        } 

        fetchQuestion()
    },[])
    console.log(questions)

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    return(
        <section>
            <form>
                {questionsElements}
                
            </form>
        </section>
    )
}