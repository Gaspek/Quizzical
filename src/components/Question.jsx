export default function Question(props){

  const correctAnswerColor = "#94D7A2";

  const answersList = props.answers.map(((answer) => {
      const style = {
      backgroundColor: checkAnswer(answer)
      }
      return(
          <label key={answer}>
              <input type="radio" name={props.id} value={answer} required={true} disabled={props.isAnswered}/>
                <span className="answer" style={style}>{answer}</span>
          </label>
    )}))
    function checkAnswer(answer){
      console.log("isAnswerd: ", props.isAnswered)
      if(props.isAnswered && answer === props.correctAnswer) return correctAnswerColor;
      return false;
    }
    return(
    <div className="question-container">
        <h2>{props.text}</h2>
        <div className="question">
          {answersList}
        </div>
    </div>
    )
}