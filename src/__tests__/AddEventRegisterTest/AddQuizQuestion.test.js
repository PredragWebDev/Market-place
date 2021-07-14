import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddQuizQuestion from "../../Pages/Dashboard/AddEventRegister/AddQuizQuestion";

describe("AddQuizeQuestion",()=>{
    const userEventFire = userEvent.setup();
    
    it("Should render form for adding new QUIZ question",()=>{
        render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>);
        const screenText = screen.getByText(/Question/i);
        expect(screenText).toBeInTheDocument();
        const questionElement = screen.getByLabelText(/question/i)
        expect(questionElement).toBeInTheDocument();
    })
    
    it("Should display the correct number of categories option",()=>{
        render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>);
        const categoryLength = screen.getAllByRole("option").length;
        expect(categoryLength).toBe(12);
    })

    it("Should allow user to change and choose categories option",()=>{
        const { getByTestId, getAllByTestId } = render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>);
        // debug()
        const cricOption = screen.getByRole("option",{name:"Cricket"})
        const selectOptions = screen.queryAllByTestId("ctg-option");
        expect(selectOptions).toHaveLength(8);
        fireEvent.change(selectOptions[0], { target: { value: "Football" } });
        
  //The value should be the key of the option
  fireEvent.change(getByTestId('q-ctg-select'), { target: { value: "Football" } })
  let options = getAllByTestId('ctg-option')
  expect(options[0].selected).toBeTruthy();

//   expect(options[2].selected).toBeFalsy();

        // userEventFire.selectOptions(selectOptions[0],"Football")
        // const selectedOpt = userEventFire.selectOptions(screen.getByRole("option",{name:"Basket-Ball"}))
        // expect(selectedOption.selected).toBe(true)
        // expect(selectedOpt.selected).toBe(true)
        // screen.getByRole('combobox')
        // userEventFire.click(screen.getByRole('option', { name: 'Cricket' }),)
        // expect(screen.getByRole('option', { name: 'Cricket' }).selected).toBe(true)
    })
    it("Should allow user to change and choose lavel option",async ()=>{
        render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>);
        // const selectedOption = await userEventFire.selectOptions(screen.getByRole("option",{name:"Hard"}))
        // expect(selectedOption.selected).toBe(true)
    })
    
    /*
    it("Should filup form question", async()=>{
        render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>);
        const fakeQuizQuestionData = {
            insertedId: "fd24gfh4t1rgfhrt4h",
            acknowledgement: true
        };
        jest.spyOn(global,"fetch").mockImplementation(()=>
            Promise.resolve({
                json: Promise.resolve(fakeQuizQuestionData)
            })
        );
        // jest.spyOn(window,"alert").mockImplementation(()=>{})
        // window.alert = jest.fn();
        await act(()=>{
            render(<AddQuizQuestion setAddQuizeModalOpen={jest.fn()}></AddQuizQuestion>)
        })
        expect(window.alert).toHaveBeenCalledTimes(1);

        // remove the mock to ensure tests are completely isolated
        global.fetch.mockRestore();
        // window.alert.mock
    })
    */
})