import { FaCheck, FaTimes } from "react-icons/fa";
export default function TrueOrFalse({
    question,
    handleChange,
    grading,
    answer
}: {
    question: any;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    grading?: boolean;
    answer?: string;
}) {

    const correct = () => {
        return question.answers.includes(answer);
    }

    const tf = ["true", "false"]
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
                    {/* <div className="form-check mb-2">
                        <input value={"true"} className="form-check-input" type="radio" name="true_false" id="true"
                            onChange={(e) => handleChange?.(e)} />
                        <label className="form-check-label" htmlFor="true">
                            True
                        </label>
                    </div>
                    <div className="form-check mb-2">
                        <input value={"false"} className="form-check-input" type="radio" name="true_false" id="false"
                            onChange={(e) => handleChange?.(e)} />
                        <label className="form-check-label" htmlFor="false">
                            False
                        </label>
                    </div> */}
                    {tf.map((c: string, index: number) =>
                    (
                        <div>
                            <div className="form-check">
                                {!grading ? (
                                    <div>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="choices"
                                            id={`choice-${index}`}
                                            value={c}
                                            onChange={(e) => handleChange?.(e)}
                                        />
                                        <label className="form-check-label" htmlFor={c}>
                                            {c}
                                        </label>
                                    </div>
                                ) : (
                                    <div>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="choices"
                                            id={`choice-${index}`}
                                            value={c}
                                            checked={answer === c}
                                            readOnly // make radio button read-only in grading mode
                                            disabled
                                        />
                                        <label className="form-check-label" htmlFor={`choice-${index}`}>
                                            {c}
                                        </label>
                                    </div>
                                )}
                            </div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}