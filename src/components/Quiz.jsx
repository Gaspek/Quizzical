import { useEffect, useState } from "react";
import Question from "./Question";
import { nanoid } from 'nanoid'

export default function Quiz(){

    const [questions, setQuestions] = useState([])

    const questionsElements = 
        questions.map(question => (
            <Question key={question.id} {...question} />))

    useEffect(() => {
        const fetchQuestion = async () => {
            try{
                const response = await  fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
                const data = await response.json()
                const formattedData = data.results.map((data) => ({
                        id: nanoid(),
                        text: decodeHtml(data.question),
                        answers: shuffleArray([...data.incorrect_answers, data.correct_answer].map(entry => decodeHtml(entry))),
                        correctAnswer: data.correct_answer
                    }))
                setQuestions(formattedData)
            }catch (error){
                console.error("Error fetching questions: ", error)
            }
        } 

        fetchQuestion()
    },[])

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

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());

        console.log(formJson)
        console.log(questions)
    }

    return(
        <section>
            <form onSubmit={handleSubmit} method="post" className="quiz">
                {questionsElements}
                <button type="submit">Check answer</button>
            </form>
        </section>
    )
}