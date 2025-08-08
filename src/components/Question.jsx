export default function Question(props){

    const answersList = props.answers.map(((answer) => {return(
                <label key={answer}>
                    <input type="radio" name={props.id} value={answer} required={true} />
                      <span className="answer">{answer}</span>
                </label>
    )}))
    
    return(
    <div className="question-container">
        <h2>{props.text}</h2>
        <div className="question">
          {answersList}
        </div>
    </div>
    )
}