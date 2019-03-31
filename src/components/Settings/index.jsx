import React, { Component } from 'react';
import Setting from './Setting';
import SubSetting from './SubSetting';

class Settings extends Component {
  render() {
    return (
        <div style={{ width: 500 }}>
        <Setting
            Name={"Cookies"}
            ViewMoreContent={
            <div>
                <SubSetting parent={"cookies"} option={"session"} Name={"Session"}/>
                <SubSetting parent={"cookies"} option={"persistent"} Name={"Persistent"}/>
                <SubSetting parent={"cookies"} option={"third_party"} Name={"Third party"}/>
            </div>}
            option={"cookies"}
        />
        <Setting
            Name={"Personal data"}
            ViewMoreContent={
            <div>
                <SubSetting parent={"personal_data"} option={"email"} Name={"Email"}/>
                <SubSetting parent={"personal_data"} option={"address"} Name={"Address"}/>
                <SubSetting parent={"personal_data"} option={"credentials"} Name={"Credentials"}/>
                <SubSetting parent={"personal_data"} option={"contact_info"} Name={"Contact info"}/>
                <SubSetting parent={"personal_data"} option={"payment_info"} Name={"Payment info"}/>
            </div>}
            option={"personal_data"}
        />
        <Setting
            Name={"Location"}
            ViewMoreContent={
            <div>
                <SubSetting parent={"location"} option={"gps"} Name={"GPS"}/>
                <SubSetting parent={"location"} option={"ip"} Name={"IP address"}/>
                <SubSetting parent={"location"} option={"sensor_data"} Name={"Sensor data"}/>
                <SubSetting parent={"location"} option={"nearby_info"} Name={"Nearby info"}/>
            </div>}
            option={"location"}
        />
        <Setting 
            Name={"Camera"}
            option={"camera"}
        />
        <Setting 
            Name={"Microphone"}
            option={"microphone"}
        />
        <Setting 
            Name={"Tracking activity"}
            ViewMoreContent={
            <div>
                <SubSetting parent={"tracking_activity"} option={"searching_terms"} Name={"Tearms you search for"}/>
                <SubSetting parent={"tracking_activity"} option={"content"} Name={"Videos, interactions with ads, audio"}/>
                <SubSetting parent={"tracking_activity"} option={"purchase_activity"} Name={"Purchasing history"}/>
                <SubSetting parent={"tracking_activity"} option={"people"} Name={"People"}/>
            </div>}
            option={"track_activity"}
        />
        <Setting 
            Name={"Downloads"}
            option={"downloads"}
        />
        <Setting 
            Name={"SSL"}
            option={"ssl"}
        />
        <Setting 
            Name={"Javascript"}
            option={"javascript"}
        />
        <Setting 
            Name={"Plug-ins"}
            option={"plug_ins"}
        />
        </div>
    );
  }
}

export default Settings;
