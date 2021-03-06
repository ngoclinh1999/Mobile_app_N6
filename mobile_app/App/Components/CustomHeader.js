import React, {Component} from 'react';
import styles from './Styles/CustomHeaderStyles';
import {Header, Icon, Button} from 'react-native-elements';

class Back extends Component {
  render() {
    return (
      <Icon
        name="arrow-back"
        type="AntDesign"
        size={25}
        color="white"
        underlayColor="transparent"
        onPress={() => {

        }}
      />
    );
  }
}

class Add extends Component {
  render() {
    return (
      <Icon
        name="add"
        type="AntDesign"
        size={25}
        color="white"
        underlayColor="transparent"
        onPress={() => {

        }}
      />
    );
  }
}
export default class CustomHeader extends Component {
  render() {
    const title = this.props.title;
    const add = this.props.add;
    const admin = this.props.admin;

    if (add === 'No') {
      return (
        <Header
          centerComponent={{text: title, style: styles.titleStyle }}
          leftComponent={<Back {...this.props} />}
          containerStyle={styles.header}
        />
      );
    } else {
      if (admin === 'No' && title === 'Thông tin cảnh báo') {
        return (
          <Header
            centerComponent={{text: title, style: styles.titleStyle }}
            leftComponent={<Back {...this.props} />}
            containerStyle={styles.header}
          />
        )
      } else {
        return (
          <Header
            centerComponent={{text: title, style: styles.titleStyle }}
            leftComponent={<Back {...this.props} />}
            rightComponent={<Add {...this.props} />}
            containerStyle={styles.header}
          />
        )
      }
    }
  }
}