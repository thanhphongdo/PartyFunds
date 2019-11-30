module.exports = {
    member: {
        identifier: 'member',
        rules: [
            {
                type: 'empty',
                prompt: 'Chọn người nhận'
            }
        ]
    },
    value: {
        identifier: 'value',
        rules: [
            {
                type: 'empty',
                prompt: 'Nhập số tiền'
            },
            {
                type: 'greaterThan[0]',
                prompt: 'Nhập số tiền lớn hơn 0'
            }
        ]
    },
    members: {
        identifier: 'members',
        rules: [
            {
                type: 'empty',
                prompt: 'Chọn người tham gia'
            }
        ]
    },
}