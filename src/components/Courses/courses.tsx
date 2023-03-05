/* eslint-disable prettier/prettier */
import SearchBar from "./components/SearchBar/SearchBar";
import Button, { ButtonTypes } from "../../common/Button/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./components/Course-Card/CourseCard";

// interface courseList {

// }

export const Courses = () => {
    const navigate = useNavigate();
    const PLACEHOLDER_TEXT = "Enter course name or id";
    const ADD_COURSE_BUTTON_TEXT = "Add new course";
    const [updatedSearch, startSearch] = useState("");


    const addCourseClick = () => {
        navigate('/courses/add');
    }


    return (
        <>
            <div className="courses col-12">
                <div className="search-container">
                    <SearchBar
                        {...{ startSearch }}
                        placeholder={PLACEHOLDER_TEXT}
                        class="search-input-class"
                    />
                    <Button
                        buttonText={ADD_COURSE_BUTTON_TEXT}
                        class="button header-btn"
                        type={ButtonTypes.Button}
                        handleClick={addCourseClick}
                    />
                </div>
                <CourseCard
                    {...{ updatedSearch }}
                />
            </div>
        </>
    );
};

