import React, { useState } from "react";
import style from './MainPartInfo.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function MainPartInfo() {

    const [selectedDate, setSelectedDate] = useState(null);

    return(
        <div className={style.container}>
            <h1 className={style.h1}>Information</h1>
            <p>Manage information to protect your account</p>
            <hr />
            <table>
                <tr>
                    <td className={style.rightAlign}>Email</td>
                    <td>email@gmail.com</td>
                </tr>
                <tr>
                    <td className={style.rightAlign}>Full Name</td>
                    <td><input className={style.inputBox} type='text'/></td>
                </tr>
                <tr>
                    <td className={style.rightAlign}>Phone Number</td>
                    <td><input className={style.inputBox} type='tel' /></td>
                </tr>
                <tr>
                    <td className={style.rightAlign}>Address</td>
                    <td><input className={style.inputBox} type='text'/></td>
                </tr>
                <tr>
                    <td className={style.rightAlign}>Gender</td>
                    <td>
                        <input className="w3-radio" type="radio" name="gender" value="male" /><label> Male </label>
                        <input className="w3-radio" type="radio" name="gender" value="female" /><label> Female </label>
                        <input className="w3-radio" type="radio" name="gender" value="other" /><label> Other </label>
                    </td>
                </tr>
                <tr>
                    <td className={style.rightAlign}>Day of Birth</td>
                    <td>
                        <DatePicker 
                            className={style.date}
                            selected={selectedDate} 
                            onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                        />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><button>Save</button></td>
                </tr>
            </table>
        </div>
    );
}

export default MainPartInfo;