import { useContext } from "react"
import { UserContext } from "../../App"

export default function Header(){

    const users=useContext(UserContext)

    return(
        <section className="header">
            <div className="header-logo">Logo</div>
            <div className="header-title">WebsiteName</div>
            <div className="user-info">User {users.name}</div>
        </section>
    )


}