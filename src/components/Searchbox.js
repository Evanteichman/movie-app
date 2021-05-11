import { react, UseState } from 'react';

const Searchbox = (props) => {





    return (
        <div className="search">
            <div className="container">
                <input
                    type="text"
                    placeholder="Search . . ."

                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}></input>
            </div>
        </div>
    )
}

export default Searchbox;