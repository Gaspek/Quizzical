export default function Intro(props){
    return(
        <section className="intro">
            <h1 className="title">Quizzical</h1>
            <p>Test your knowledge!</p>
            <button className="start-btn" onClick={props.startGame}>Start quiz</button>
        </section>
    )
}