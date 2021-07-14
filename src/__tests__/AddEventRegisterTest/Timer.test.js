import { render,screen } from "@testing-library/react"
import Timer from "../../Pages/Dashboard/AddEventRegister/Timer"

describe("Timer",()=>{
    it("component should be render",()=>{
        render(<Timer handleNextQuiz={jest.fn()} questionCount={3} startQuize={jest.fn()}></Timer>)
        const element = screen.queryByTestId(/time-counter/i);
        expect(element).toHaveTextContent("Time: 60");
    })
})