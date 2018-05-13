class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hocVien : 10
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>Số lượng học viên: {this.state.hocVien}</p>
                <br /><br/>
                <button>Xóa</button>
            </div>
        );
    }
}


ReactDOM.render(<Note txt="Welcome Note Component" />,
    document.getElementById('root'));