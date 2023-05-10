import React from 'react';
// import { UploadOutlined } from '';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const props: UploadProps = {
  name: 'file',
  action: 'http://172.20.10.4:8081/file/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    info.file.originFileObj
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

};

const UploadFile: React.FC = () => (
  <Upload {...props}>
    <Button>Click to Upload</Button>
  </Upload>
);

export default UploadFile;