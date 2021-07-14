import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import ContestResult from "../../Pages/Dashboard/AddEventRegister/ContestResult";
import server from "../__mocks__/testServer/server";




describe("contestResult",()=>{
    beforeAll(()=>{
        server.listen();
    });
    beforeEach(()=>{
        server.resetHandlers();
    })
    afterAll(()=>{
        server.close();
    })
    afterEach(()=>{})

    it("Component should render",async()=>{
        render(<ContestResult></ContestResult>)
        const loaderElement = screen.getByTestId(/result-loader/i);
        expect(loaderElement).toBeInTheDocument();
    });

    it("Data fetch and result should display",async()=>{
        render(<ContestResult></ContestResult>)
        const loaderElement = screen.getByTestId(/result-loader/i);
        expect(loaderElement).toBeInTheDocument();
        await waitForElementToBeRemoved(()=>screen.getByTestId(/result-loader/i));
        const resultTable = await screen.getByTestId(/result-table/i);
        expect(resultTable).toBeInTheDocument();
        
        const position = await screen.getAllByTestId(/position/i);
        const par_id = await screen.getAllByTestId(/par_id/i);
        const name = await screen.getAllByTestId(/name/i);
        const email = await screen.getAllByTestId(/email/i);
        const remaining_time = await screen.getAllByTestId(/remaining_time/i);
        const valid_Score = await screen.getAllByTestId(/valid_Score/i);
        const total_score = await screen.getAllByTestId(/total_score/i);

        expect(position.length).toBe(2);
        expect(par_id.length).toBe(2);
        expect(name.length).toBe(2);
        expect(email.length).toBe(2);
        expect(remaining_time.length).toBe(2);
        expect(valid_Score.length).toBe(2);
        expect(total_score.length).toBe(2);

        expect(total_score.length).not.toBe(1);
    });

})
