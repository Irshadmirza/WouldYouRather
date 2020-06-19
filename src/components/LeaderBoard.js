import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

const Leaderboard = (props) => {
    const {users} = props;

    let usersDetails = Object.keys(users).map((key, index) => {
        let questionsAnswered = Object.keys(users[key].answers).length;
        let questionsAsked = Object.keys(users[key].questions).length;

        return {
            'name': users[key].name,
            'avatar': users[key].avatarURL,
            'questionsAnswered': questionsAnswered,
            'questionsAsked': questionsAsked,
            'totalScore': questionsAnswered + questionsAsked
        }
    });

    usersDetails.sort((a, b) => {
        if (b.totalScore < a.totalScore) return -1;
        if (b.totalScore > a.totalScore) return 1;
        return 0;
    });

    return (
        <div className='leaderboard-list-container'>
        { usersDetails.map((user) => (
                        <li key={user.name} >
                            <UserCard user={user}/>
                        </li>
                    ))}
    </div>
    )
};

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);
