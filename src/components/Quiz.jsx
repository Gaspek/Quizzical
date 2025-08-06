import Question from "./Question";

export default function Quiz(){

    const question = {
        id: 1,
        text: "How would one say goodbye in Spanish?",
        answers: ["Hola", "Adiós", "Au Revoir", "Salir"]
    }

    return(
        <section>
            <form>
                <Question {...question} />
            </form>
        </section>
    )
}