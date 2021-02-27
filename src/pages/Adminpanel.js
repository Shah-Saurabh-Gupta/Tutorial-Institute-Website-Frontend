import React from 'react'
import AdminNotices from '../components/AdminNotices'
import AdminResources from '../components/AdminResources'
import AdminStudentReg from '../components/AdminStudentReg'

function Adminpanel() {
    return (
        <>
            <div><AdminStudentReg /></div>
            <div><AdminNotices /></div>
            <div><AdminResources /></div>
        </>
    )
}

export default Adminpanel
