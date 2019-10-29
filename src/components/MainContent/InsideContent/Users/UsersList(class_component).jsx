import React from 'react'
import s from './UsersList.module.css'
import * as axios from 'axios'
import usersPhoto from '../../../../assets/Image/UsersIcon.png'


class UsersListCLS extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
    });
    }


    render(){
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div>
                <div className={s.paginator}>
                    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    )}
                </div>

                {
                    this.props.users.map(u => <div key={u.id}>
                        <section className={s.wrapper}>

                            <div className={s.logoAndStatus}>
                                <img src={u.photos.small !== null ? u.photos.small : usersPhoto}/>
                                {u.followed
                                    ?
                                    <button className={s.followedBtn} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    :
                                    <button className={s.followedBtn} onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
                                }

                            </div>


                            <div className={s.UserAllContent}>
                                <div className={s.NameStatus}>
                                    <p className={s.Name}>{u.name}</p>
                                    <p className={s.Status}>{u.status}</p>
                                </div>

                                <div className={s.CountryCity}>
                                    <p className={s.Country}>{'u.location.country'}</p>
                                    <p className={s.City}>{'u.location.city'}</p>
                                </div>
                            </div>

                        </section>

                    </div>)}
            </div>)
    }
}

export default UsersListCLS;