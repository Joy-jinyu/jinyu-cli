module.exports = {
    apps: [
        {
            name: 'baas-explorer',
            script: 'src/server/index.ts',
            cwd: './',
            exec_mode: 'cluster_mode',
            instances: 'max',
            error_file: './logs/app-err.log',
            out_file: './logs/app-out.log',
            merge_logs: true,
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            autorestart: true,
            env_dev: {
                NODE_ENV: 'dev'
            },
            env_uat: {
                NODE_ENV: 'uat'
            },
            env_prod: {
                NODE_ENV: 'prod'
            }
        }
    ]
};
