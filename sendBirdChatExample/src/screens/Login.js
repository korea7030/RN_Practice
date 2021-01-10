import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { sendbirdLogin } from '../actions';
import { CommonActions } from '@react-navigation/native';

class Login extends Component {
    static navigationOptions = {
        title: 'LOGIN'
    }

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: '',
            error: ''
        }
        this._userIdChanged = this._userIdChanged.bind(this);
        this._nicknameChanged = this._nicknameChanged.bind(this);
        this._onButtonPress = this._onButtonPress.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { user, error } = prevProps;

        if (this.props.user !== user) {
            
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Menu' },
                ],
            })
            this.setState({ userId: '', nickname: ''}, () => {
                this.props.navigation.dispatch(resetAction);
            })
        }
    }

    _userIdChanged = (userId) => {
        this.setState({ userId });
    }

    _nicknameChanged = (nickname) => {
        this.setState({ nickname });
    }

    _onButtonPress = () => {
        const { userId, nickname } = this.state;
        this.props.sendbirdLogin({ userId, nickname });
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={styles.containerStyle}>
                    <Input
                        label="User Id"
                        value={this.state.userId}
                        onChangeText={this._userIdChanged}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Input
                        label="NickName"
                        value={this.state.nickname}
                        onChangeText={this._nicknameChanged}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Button
                        buttonStyle={{backgroundColor: '#2096f3'}}
                        title='Connect' 
                        onPress={this._onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        marginTop: 10
    }
}

function mapStateToProps({ login }) {
    const { error, user } = login;
    return { error, user };
};

export default connect(mapStateToProps, { sendbirdLogin })(Login);