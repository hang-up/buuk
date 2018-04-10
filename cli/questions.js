module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: 'Buuk'
    },

    {
        type: 'input',
        name: 'short_name',
        message: 'Project short name: fewer than 12 characters to not be truncated on homescreens',
        default: 'Buuk'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'A Buuk project'
    }
]