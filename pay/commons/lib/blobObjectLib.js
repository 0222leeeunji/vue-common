'use strict';

/**
 * blob 객체 lib
 */
export default {

    /**
     * base64를 blob 객체로 변환
     * @param base64
     * @param contentType
     * @param sliceSize
     */
    base64ToBlob(base64, contentType='', sliceSize=512) {
        const byteCharacters = atob(base64);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    },

    /**
     * blob 객체의 데이터를 파일로 다운로드
     * @param blob
     * @param filename
     */
    downBlob(blob, filename) {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    },

    encodedBase64FileDown(base64, filename) {
        const blob = this.base64ToBlob(base64);
        this.downBlob(blob, filename);
    }
}
