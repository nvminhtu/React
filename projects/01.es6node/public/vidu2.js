class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hocVien : 10
        }
        // cach khac fix
       // this.themHocVien = this.themHocVien.bind(this);
    }
    themHocVien = () => { // them ham arrow de fix loi setState ( xu ly this)
        this.setState({
            hocVien: this.state.hocVien + 1
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>Số lượng học viên: {this.state.hocVien}</p>
                <br /><br/>
                <button>Xóa</button>
                <button onClick={this.themHocVien}>Thêm học viên</button>
            </div>
        ); // hoac cal this.themHocVien.bind(this)
    }
}

// set defaultProps
Note.defaultProps = {
    txt: 'Xin chào em!!'
}

ReactDOM.render(
    <div>
        <Note />
        <Note txt="Welcome Note Component" />
    </div>,
    document.getElementById('root'));