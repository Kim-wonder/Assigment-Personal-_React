import React from 'react';
// import App from './App';



function BuketList() {

    const Header = {
        backgroundColor: '#fee',
        height : '40px',
        display : 'flex',
        justifyContent : 'spaceBtween',
        alignItem : 'center'
        
    }
    const inputBar = {
        border : '1px solid gray',
        color : 'gray',
        justifyContent : 'spaceBtween',
        backgroundColor : '#eef'
    }
    const title = {
        border : '1px solid blue',
        color : 'gray'
    }
    const todoBox = {
        border : '1px solid green',
    }
    const inBox = {
        border : '1px solid pink',
        borderRadius : '10px',
        width : '10em',
        margin : '5px',
        padding : '10px'
    }
    // .insertBtn {

    // }
    

  return (
    <div>
        <div style = {Header}>
            <div>My Todo List</div>
            <div>React</div>
        </div>
        <div style = {inputBar}>
            <div>
                <label>제목</label>
                <input type="text"></input> 
                <label>내용</label>
                <input type="text"></input> 
                <button class="insertBtn" type="button">추가하기</button>
            </div>
        </div>
        <div>
            <div>
                <h2 style = {title}>다 했어요 🔥</h2>
                <div style = {todoBox}>
                    <div style = {inBox}>
                       <div>
                            <h2>할일제목</h2>
                            <div>할일내용</div>
                        </div>
                        <div>
                            <button>삭제하기</button>
                            <button>취소</button>
                        </div> 
                    </div>            
                </div>
            </div>                        
        </div>
        <div>
            <div>
                <h2 style = {title}>다 했어요 🔥</h2>
                <div style = {todoBox}>
                    <div style = {inBox}>
                       <div>
                            <h2>할일제목</h2>
                            <div>할일내용</div>
                        </div>
                        <div>
                            <button>삭제하기</button>
                            <button>취소</button>
                        </div> 
                    </div>            
                </div>
            </div>                        
        </div>
    </div>
  ) 
}

export default BuketList;