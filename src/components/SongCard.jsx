const Song = ({tittle, youtubeId, artist}) => {
    return (
        <>
        <div className="flex justify-center p-2">
            <div className="bg-cardbg-black shadow-lg hover:bg-gray-700 select-none w-full h-16 flex justify-start items-center rounded-sm backdrop-filter backdrop-blur-2xl overflow-hidden">
                <div className="h-16 w-16">
                    <div className="content-center flex items-center justify-center px-4">
                        <div className="flex justify-center">
                            <div className="flex justify-center w-16 h-16 rounded-sm overflow-hidden shadow-lg">
                                <img className="object-cover object-center h-full w-full" src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-14 px-1">
                    <div className="inline-block align-middletext-left">
                        <div className="text-sm text-white font-popins w-44 truncate">{tittle}</div>
                        <div className="text-xs text-custom-graytext font-popins w-44 truncate">{artist}</div>
                    </div>
                </div>       
            </div>
        </div>
        </>
    )
}

export default Song