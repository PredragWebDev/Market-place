import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../test_handler/handler";

const server = setupServer(...handlers);

// writing this test just simply passing this file in test 
// here main purpuse is to export the server
describe("fakeserver",()=>{
    it("fake server test",()=>{
        render(()=><div>Server set up passing</div>)
    })
})

export default server;