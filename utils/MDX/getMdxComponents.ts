import fs from 'fs'

interface Files {
    [key: string]: string
}

export default function getMdxComponents(folderPath: string): Files
{
   const files: Files = {}

   fs.readdirSync(folderPath).forEach(file => {
        const key = `./${file}`
        const value = fs.readFileSync(folderPath + file, { encoding: 'utf-8' })
        files[key] = value
    })

    return files
}