import * as React from 'react';
import { RegisterForm } from './register-form';

export class DashboardPage {

    render() {
        return (
            <div className="main">
                <div className="left-panel">
                <RegisterForm/>
                </div>
                <div className="content-panel">
                    <span>Hello kaka</span>
                </div>
            </div>
        );
    }
}