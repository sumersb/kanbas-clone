import { FaCheck, FaTimes } from "react-icons/fa";
export default function FillInTheBlank({
    question,
    handleChange,
    grading,
    answer
}: {
    question: any;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    grading?: boolean;
    answer?: any;
}) {


    const correct = () => {
        return question.answers.includes(answer);
    }

    return (
        <div>
            <div className="row align-items-center mb-2 p-2 bg-secondary">
                {grading && (
                    correct() ?
                        <div className="col-md-1">
                            <FaCheck style={{ fontSize: '3rem', color: 'green' }} />

                        </div>
                        :
                        <div className="col-md-1">
                            <FaTimes style={{ fontSize: '3rem', color: 'red' }} />
                        </div>
                )}
                {grading ?
                    (
                        <div className="col-md-7">
                            <h2>{question.title}</h2>
                        </div>) : (
                        <div className="col-md-8">
                            <h2>{question.title}</h2>
                        </div>
                    )}
                <div className="col-md-4">
                    <h2 className='float-end'>{question.points}pts</h2>
                    {grading && (
                        correct() ? <h2 className='float-end'>{question.points} / </h2> : <h2 className='float-end'>0 / </h2>
                    )}
                </div>
            </div>
            <div className="p-5">

                <div className="p-3">
                    <p>{question.question}</p>
                </div>
                <hr></hr>
                <div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Answer</span>
                        </div>
                        {!grading ?
                            <input onChange={(e) => handleChange?.(e)} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            :
                            <input className="form-control" type="text" placeholder={answer} aria-label="Disabled input example" disabled />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}