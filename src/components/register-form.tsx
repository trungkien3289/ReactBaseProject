import * as React from 'react';

interface RegisterFormStates{
    firstName: string;
    lastName: string;
    age: number;
}

export class RegisterForm extends React.Component<{}, RegisterFormStates> {
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label for="txtFirstName">First Name</label>
                        <input itemType="text" className="form-control" id="txtFirstName" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small itemID="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="txtLastName">Last Name</label>
                        <input type="text" className="form-control" id="txtLastName" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small itemID="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="txtAge">Age</label>
                        <input type="number" className="form-control" id="txtAge" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small itemID="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" className="btn">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

