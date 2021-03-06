import React, { Component } from "react";

import styles from "./styles.module.css";

export default class DashboardStatusText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      accepted: props.accepted,
    };
  }

  render() {
    if (this.state.accepted === true) {
      return <h4 className={styles.complete}>Your application is: ACCEPTED</h4>;
    } else if (this.state.type === "complete") {
      return <h4 className={styles.complete}>Your application is: COMPLETE</h4>;
    } else if (this.state.type === "incomplete") {
      return <h4 className={styles.incomplete}>Your application is: INCOMPLETE</h4>;
    } else {
      return null;
    }
  }
}
