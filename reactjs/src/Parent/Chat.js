import React from 'react';

function Chat(){
    return(
        <div class="fabs">
          <div class="chat">
            <div class="chat_header">
              <div class="chat_option">
              <div class="header_img">
                <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
                </div>
                <span id="chat_head">Nithish</span> <br></br> <span class="agent">Kumar</span> <span class="online">(Online)</span>
               <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>
        
              </div>
        
            </div>
            <div class="chat_body chat_login">
                <a id="chat_first_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
                <p>We make it simple and seamless for businesses and people to talk to each other. Ask us anything</p>
            </div>
            <div id="chat_converse" class="chat_conversion chat_converse">
                    <a id="chat_second_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
              <span class="chat_msg_item chat_msg_item_admin">
                    <div class="chat_avatar">
                       <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
                    </div>Hey there! Any question?</span>
              <span class="chat_msg_item chat_msg_item_user">
                    Hello!</span>
                    <span class="status">20m ago</span>
              <span class="chat_msg_item chat_msg_item_admin">
                    <div class="chat_avatar">
                       <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
                    </div>Hey! Would you like to talk sales, support, or anyone?</span>
              <span class="chat_msg_item chat_msg_item_user">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                     <span class="status2">Just now. Not seen yet</span>
            </div>
            <div id="chat_body" class="chat_body">
                <div class="chat_category">
                  <a id="chat_third_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
                <p>What would you like to talk about?</p>
                <ul>
                  <li>Tech</li>
                  <li class="active">Sales</li>
                  <li >Pricing</li>
                  <li>other</li>
                </ul>
                </div>
        
            </div>
            
            <div class="fab_field">
              <a id="fab_camera" class="fab"><i class="zmdi zmdi-camera"></i></a>
              <a id="fab_send" class="fab"><i class="zmdi zmdi-mail-send"></i></a>
              <textarea id="chatSend" name="chat_message" placeholder="Send a message" class="chat_field chat_message"></textarea>
            </div>
          </div>
            <a id="prime" class="fab"><i class="prime zmdi zmdi-comment-outline"></i></a>
        </div>
    )
}
export default Chat;