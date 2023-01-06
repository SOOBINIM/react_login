const bbs = {
    articles: [
        {
            title: 'title1',
            key: 'cosmic',
            contents: {
                body: 'articles text with break text',
                commentKey: "cmt_0"
            }
        },
        {
            title: 'title3',
            key: 'cosmic',
            contents: {
                body: 'articles text with break text',
                commentKey: "cmt_1"
            }
        },
        {
            title: 'title2',
            key: 'notice',
            contents: {
                body: 'emptyComments',
                commentKey: null,
            }
        }
    ]
}

const comments = {
    cmt_0: [
        {
            header: 'title1', user: 'elonshoen', contents: 'abcdefg1'
        },
        {
            header: 'title2', user: 'elonshoen2', contents: 'abcdefg2'
        },
        {
            header: 'title3', user: 'elonshoen3', contents: 'abcdefg3'
        },
        {
            header: 'title4', user: 'elonshoen4', contents: 'abcdefg4'
        }
    ], cmt_1: [
        {
            header: 'title1', user: 'elonshoen', contents: 'abcdefg1'
        },
        {
            header: 'title2', user: 'elonshoen2', contents: 'abcdefg2'
        },
        {
            header: 'title3', user: 'elonshoen3', contents: 'abcdefg3'
        },
        {
            header: 'title4', user: 'elonshoen4', contents: 'abcdefg4'
        }
    ]
}


const boardId = {
    cosmic: {
        header: '헤더',
        footer: '푸터'
    },
    notice: {
        header: "노티스헤더",
        footer: '노티스푸터'
    }
}


export {
    bbs,
    comments,
    boardId
}