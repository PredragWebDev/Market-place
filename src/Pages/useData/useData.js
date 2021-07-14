import { useEffect, useState } from "react";

const Usedata = () => {
    //State Declare
    const [course, setCourse] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://blooming-thicket-66783.herokuapp.com/players')
            .then(res => res.json())
            .then(data => this.course(data))
    },
        []);

    return [course, setCourse]
}

export default Usedata;