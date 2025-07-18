import './Account.css'

export default function Account({user,onLogout}){
    return(
        <div className="account-container">
            <h2>Account</h2>
            <img className='c' src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt="avter" />
            <p><strong>Name: </strong> {user.name}</p>
            <p><strong>Email: </strong> {user.email}</p>
            <button onClick={onLogout}>LogOut</button>
        </div>
    )
}