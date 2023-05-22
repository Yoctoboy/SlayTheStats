import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'

import JSZip from 'jszip'
import StatsExtractor from './StatsExtractor/StatsExtractor'
import { Run } from './StatsExtractor/Run'

const ArchiveDropzone = () => {
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const archiveFile = acceptedFiles[0]
        const zip = new JSZip()
        const extractedFiles = await zip.loadAsync(archiveFile);
        let fileList = []

        extractedFiles.forEach(async (relativePath, file) => {
            if (file.dir) return
            const content = await file.async("string");
            // console.log(content)
            fileList.push(content)
        })
        const runs = await Promise.all(extractedFiles.file(/.*/).map(async f => JSON.parse(await f.async("string")))) as Run[]
        new StatsExtractor(runs).extract()
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1 })
    return <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
        }
    </div>
}

export default ArchiveDropzone