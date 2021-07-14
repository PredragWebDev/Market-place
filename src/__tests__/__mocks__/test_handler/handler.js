import { render } from "@testing-library/react";
import { rest } from "msw";
const fakeContestParticipant = [
    {
        contact_email: "maynuddin@gmail.com",
        contact_number: "01908145097",
        contest_date: "2022-04-19",
        email: "mayuddinprogrammer@gmail.com",
        event_name: "paly",
        lavel: "Easy",
        name: "Maynuddin Bhuiyan ",
        par_id: 1650999043188,
        playing_ctg: "Football",
        user_address: "Mirpur 01",
        user_city: "Dhaka",
        _id: "62683f008b493ae6dd8e9898",
    },
    {
        contact_email: "maynuddin@gmail.com",
        contact_number: "01908145097",
        contest_date: "2022-04-19",
        email: "ab@gmail.com",
        event_name: "paly",
        lavel: "Easy",
        name: "Maynuddin Bhuiyan ",
        par_id: 1650999043199,
        playing_ctg: "Football",
        user_address: "Mirpur 01",
        user_city: "Dhaka",
        _id: "62683f008b493ae6dd8e9898",
    },
]
const fakeContestResult = [
    {
        par_id: 1650999043188,
        position: 1,
        remaining_time: 496518,
        total_score: 68,
        valid_Score: 19,
    },
    {
        par_id: 1650999043199,
        position: 1,
        remaining_time: 496518,
        total_score: 68,
        valid_Score: 19,
    },
]
export const handlers = [
    rest.get("https://blooming-thicket-66783.herokuapp.com/contest/participant",(req,res,ctx)=>{
        return res(ctx.json(fakeContestParticipant))
    }),
    rest.post("https://blooming-thicket-66783.herokuapp.com/contest/result",(req,res,ctx)=>{
        return res(ctx.json(fakeContestResult))
    }),
]

// writing this test just simply passing this file in test 
// here main purpus is to serve fake data for the server
describe("fakeserver",()=>{
    it("fake server test",()=>{
        render(()=><div>Fake data is passing</div>)
    })
})
