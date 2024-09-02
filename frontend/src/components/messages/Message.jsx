import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className="w-10 rounded-full">
                <img src="" alt="Tailwind CSS chat bubble component" />

            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi whats up foo?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1">9:99</div>
    </div>
  )
}

export default Message