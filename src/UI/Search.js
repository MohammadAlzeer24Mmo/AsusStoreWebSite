import React from 'react';
import { Fragment, useEffect, useState } from "react";
import PriceRange from "./PriceRange";
import "./search.css";

const Search = (props) => {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [checkedOption, setCheckedOption] = useState({
    laptop: "Laptop",
    screen: "Screen",
    mouse: "Mouse",
    keyboard: "Keyboard",
    backpack: "Backpack",
  });
  
  const [selectedOptions, setSelectedOptions] = useState({
    min: minValue,
    max: maxValue,
    checked: checkedOption,
  });

  console.log("letstest", selectedOptions);

  
  useEffect(() => {
    setSelectedOptions({
      min: minValue,
      max: maxValue,
      checked: checkedOption,
      // checked: checkedOption.laptop, 39 time !!!  console.log
    });
  }, [minValue, maxValue, checkedOption]);
  

  
  props.onChangeSelectedSearchOptions(selectedOptions);
  // const changeCheckboxHandler = (event) => {
    //   let value = event.target.value;
    //   if(event.target.checked){
      //       setCheckedOption({laptop:'Laptop',mouse:'',keyboard:''});
      //   console.log(event.target.checked)
      
      //   }else{
        //     setCheckedOption("Unchecked Laptop")
  // }
  // };

  const changeCheckboxHandler = (event, checkstate) => {
    let value = event.target.value;
    // let newOptions = { ...checkedOption };
    if (checkstate === "Laptop") {
      if (checkedOption.laptop === "Laptop") {
        setCheckedOption(
        (prevState) => {
          return { ...prevState, laptop:"" }
        })
        checkedOption.laptop = "";
      } else {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, laptop:"Laptop" }
          })
      }
    }

    //  let s = newOptions.laptop === "Laptop" ? "yesLaptop" : "nolaptop"
    if (checkstate === "Screen") {
      if (checkedOption.screen === "Screen") {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, screen:"" }
          })
      } else {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, screen:"Screen" }
          })
      }
    }
    if (checkstate === "Mouse") {
      if (checkedOption.mouse === "Mouse") {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, mouse:"" }
          })
      } else {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, mouse:"Mouse" }
          })
      }
    }

    if (checkstate === "Keyboard") {
      if (checkedOption.keyboard === "Keyboard") {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, keyboard:"" }
          })
      } else {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, keyboard:"Keyboard" }
          });
      }
    }

    if (checkstate === "Backpack") {
      if (checkedOption.backpack === "Backpack") {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, backpack:"" }
          });
      } else {
        setCheckedOption(
          (prevState) => {
            return { ...prevState, backpack:"Backpack" }
          });
      }
    }

    // setCheckedOption(newOptions);
    // }
  };


  const minVHandler = (min) => {
    setMinValue(min);
  };
  const maxVHandler = (max) => {
    setMaxValue(max);
  };
  return (
    <Fragment>
      <div className="search-options">
        <div className="search-options_catagories">
          <div>Select what products do you want to search :</div>
          <div>
          <input
            defaultChecked
            name="Laptop"
            value="Laptop"
            onChange={(event) => changeCheckboxHandler(event, "Laptop")}
            type="checkbox"
          />
          <label htmlFor="Laptop"> Laptop </label>
          </div>
          <div>
          <input
            defaultChecked
            name="screen"
            value="screen"
            onChange={(event) => changeCheckboxHandler(event, "Screen")}
            type="checkbox"
          />
          <label htmlFor="screen"> Screen </label>
          </div>
          <div>
          <input
            defaultChecked
            name="mouse"
            value="mouse"
            onChange={(event) => changeCheckboxHandler(event, "Mouse")}
            type="checkbox"
          />
          <label htmlFor="mouse"> Mouses </label>
          </div>
          <div>
          <input
            defaultChecked
            name="Keyboard"
            value="Keyboard"
            onChange={(event) => changeCheckboxHandler(event, "Keyboard")}
            type="checkbox"
          />
          <label htmlFor="mouse"> Headphones </label>
          </div>
          <div>
          <input
            defaultChecked
            name="Backpack"
            value="Backpack"
            onChange={(event) => changeCheckboxHandler(event, "Backpack")}
            type="checkbox"
          />
          <label htmlFor="mouse"> Backpacks </label>
          </div>
        </div>
        <div className="search-options_prices">
          <PriceRange minV={minVHandler} maxV={maxVHandler} />
        </div>
      </div>

  
    </Fragment>
  );
};

export default Search;
