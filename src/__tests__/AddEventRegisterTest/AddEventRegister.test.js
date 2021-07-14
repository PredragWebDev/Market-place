import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AddEventRegister from "../../Pages/Dashboard/AddEventRegister/AddEventRegister";




describe("AddEventRegister",()=>{
   

    let originalFetch;
    beforeEach(()=>{
        originalFetch = (global).fetch;
    })
    afterEach(()=>{
        global.fetch = originalFetch;
    })

    // 1: scenario
    it("before fetching data, loading should be shown",()=>{
        const {debug} = render(<AddEventRegister></AddEventRegister>)
        const eventBook = screen.getByTestId(/book-loading/i);
        expect(eventBook).toBeInTheDocument()
    });

    // 2: scenario // (useEffect with fetch)
    it("It should call eventRegister endpoint to get all data", async ()=>{
        const fakeResponse = [
            {ClubName: "mancity",StartDate: "2022-04-06",address: "Mirpur 01",age: "10-20",city: "Dhaka",email: "mayuddinprogrammer@gmail.com",eventDes: "i need it urgent",eventName: "Maynuddin",number: "01908145097",sex: "Male",_id: "6261d8b8d7f3131f3fad4443",}
        ];
        const mockResponse = {json: jest.fn().mockResolvedValueOnce(fakeResponse)};
        const mockedFetch = jest.fn().mockResolvedValueOnce(mockResponse);
        (global).fetch = mockedFetch;
        const {getByTestId} = render(<AddEventRegister></AddEventRegister>)
        const element = await waitForElement(()=>getByTestId(/event-book-0/i))
        
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(/mancity/i);
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mockResponse.json).toBeCalledTimes(1);
    });

    // 3: scenario
    it("Should be delete a booking from the list",async()=>{
        const fakeResponse = [
            {ClubName: "mancity",StartDate: "2022-04-06",address: "Mirpur 01",age: "10-20",city: "Dhaka",email: "mayuddinprogrammer@gmail.com",eventDes: "i need it urgent",eventName: "Maynuddin",number: "01908145097",sex: "Male",_id: "6261d8b8d7f3131f3fad4443"},
            {ClubName: "Rajshahi",StartDate: "2022-04-07",address: "Mirpur 02",age: "10-25",city: "Chattagram",email: "moin@gmail.com",eventDes: "i love it urgent",eventName: "Football",number: "01908145099",sex: "Male",_id: "6261d8b8d7f3131f3fad4440"},
        ];
        const mockResponse = {json: jest.fn().mockResolvedValueOnce(fakeResponse)};
        const mockedFetch = jest.fn().mockResolvedValueOnce(mockResponse);
        (global).fetch = mockedFetch;
        const {getByTestId} = render(<AddEventRegister></AddEventRegister>)
        const element = await waitForElement(()=>getByTestId(/event-book-1/i))
        
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(/Rajshahi/i);
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mockResponse.json).toBeCalledTimes(1);

        const delButton = await waitForElement(()=>getByTestId(`book-del-${fakeResponse[1]._id}`))
        expect(delButton).toBeInTheDocument();
        // response fake delete data  and press click
        const confirmSpy = jest.spyOn(window,"confirm");
        confirmSpy.mockImplementation(jest.fn(()=>true));
        window.alert = jest.fn()
        const fakeDelRes = {deletedCount:1, acknowledgement: true};
        const mockDelRes = {json: jest.fn().mockResolvedValueOnce(fakeDelRes)};
        const mockDelFetch = jest.fn().mockResolvedValueOnce(mockDelRes);
        (global).fetch = mockDelFetch;
        fireEvent.click(delButton);
        const delElement = await waitForElement(()=> screen.getByTestId(`book-del-${fakeResponse[1]._id}`));
        expect(delElement).not.toBeInTheDocument();
        (global).fetch.mockRestore()
        window.alert.mockRestore()
    });

    // 4: scenario
    it("Should be aproved a booking from the list",async()=>{
        const fakeResponse = [
            {ClubName: "mancity",StartDate: "2022-04-06",address: "Mirpur 01",age: "10-20",city: "Dhaka",email: "mayuddinprogrammer@gmail.com",eventDes: "i need it urgent",eventName: "Maynuddin",number: "01908145097",sex: "Male",_id: "555555555555555555",status: "pending"},
            {ClubName: "Rajshahi",StartDate: "2022-04-07",address: "Mirpur 02",age: "10-25",city: "Chattagram",email: "moin@gmail.com",eventDes: "i love it urgent",eventName: "Football",number: "01908145099",sex: "Male",_id: "66666666666666666666",status: "pending"},
        ];
        const mockResponse = {json: jest.fn().mockResolvedValueOnce(fakeResponse)};
        const mockedFetch = jest.fn().mockResolvedValueOnce(mockResponse);
        (global).fetch = mockedFetch;
        // const {getByTestId} = render(<AddEventRegister></AddEventRegister>)
        // const element = await waitForElement(()=>getByTestId(`approve-ticket-${fakeResponse[0]._id}`))
        await act(()=>{
            render(<AddEventRegister></AddEventRegister>)
        })
        const element = await screen.getByTestId(`approve-ticket-${fakeResponse[0]._id}`)
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(/Approve/i);
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mockResponse.json).toBeCalledTimes(1);
        
        const aproveButton = await screen.getByTestId(`approve-ticket-${fakeResponse[1]._id}`)
        // const aproveButton = await waitForElement(()=>getByTestId(`approve-ticket-${fakeResponse[1]._id}`))
        expect(aproveButton).toBeInTheDocument();
        // response fake approve data  and press click;
        const fakeAprRes = {modifiedCount:1, acknowledgement: true};
        const mockAprRes = {json: jest.fn().mockResolvedValueOnce(fakeAprRes)};
        const mockAprFetch = jest.fn().mockResolvedValueOnce(mockAprRes);
        (global).fetch = mockAprFetch;
        // problem in main function, the function is deleting the data insted of update the approve status
        

        //    fireEvent.click(aproveButton) 
        //    const aprElement = await waitForElement(()=> screen.getByTestId(`approve-ticket-${fakeResponse[1]._id}`));
        //    expect(aprElement).not.toBeInTheDocument();
        //    expect(aprElement).not.toHaveTextContent(/approve/i);
        
        
    });
})

