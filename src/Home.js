import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [searchvalue, setsearchvalue] = useState("");
    const [responseapi, setresponseapi] = useState([{}]);
    const [searchoptions, setsearchoptions] = useState('Shows');
    console.log(responseapi);

    const inputsearch = (e) => {
        console.log(e)
        setsearchvalue(e.target.value);
    };

    const changetxt = () => {
        setsearchvalue("Shubham");
    };
    const onRadiochange = (e) => {
        setsearchoptions(e.target.value)
    }
    console.log(searchoptions);
    const searchedvalue = searchvalue;
    //const showapi = `https://api.tvmaze.com/search/shows?q=${searchedvalue}`;
    //const userapi= `https://api.tvmaze.com/search/people?q=${searchoptions}`;
    const userapi = `https://api.tvmaze.com/search/${searchoptions}?q=${searchedvalue}`;
    console.log(userapi);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(userapi);
                // handle success
                //console.log(response);
                setresponseapi(response.data);
                console.log(response)
            } catch (error) {

                // handle error
                console.error(error);
            }
        };

        fetchData();

        // Include userapi in the dependency array to trigger the effect when userapi changes.
    }, [userapi]);



    return (
        <>
            <section className="searchbox container">
                <div className="col-12 d-flex">
                    <button type="button" onClick={changetxt}>Update Text</button>
                    <label>{searchvalue}</label>
                    <label>Actors</label>
                    <input type="Radio" value="people" name="search-options" onChange={onRadiochange} checked={searchoptions === "people"} />
                    <label>Shows</label>
                    <input type="Radio" value="shows" name="search-options" onChange={onRadiochange} checked={searchoptions === "shows"} />
                    <input type="text" value={searchvalue} onChange={inputsearch} />

                </div>
                <div>

                    {responseapi.map((item) => {
                        if (item.show && item.show.name) {
                            const showName = item.show.name;
                            return <p key={item.show.id}>{showName}</p>;
                        } else if (item.person && item.person.name) {
                            const personName = item.person.name;
                            return <p key={item.person.id}>{personName}</p>;
                        } else {
                            return <p key={Math.random()}>N/A</p>;
                        }
                    })}


                </div>
            </section>
        </>
    )
}
export default Home;