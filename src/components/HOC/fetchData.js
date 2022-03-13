import React from "react";

const fetchData = (WrappedComp) => {
  class _TEMP extends React.Component {
    constructor(props) {
      super(props);
      
      this.props = props;
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      fetch(this.props.dataSrc)
        .then((res) => {
          const result = res.json();
          return result;
        })
        .then((result) => {
          console.log(result);
          this.setState({ data: result.slice(0,4) });
        })
        .catch((err) => console.error(err));
    }

    render() {
      const { dataScr, ...otherProps } = this.props;
      const { data } = this.state;
      return <WrappedComp data={data} {...otherProps} />;
    }
  }
  return _TEMP;
};

export default fetchData;
