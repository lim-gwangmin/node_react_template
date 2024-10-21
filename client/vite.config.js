// import react from '@vitejs/plugin-react-swc';
// import { defineConfig, loadEnv } from 'vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
// // https://vitejs.dev/config/
// export default ({ mode }) => {
//   const config = {
//     plugins: [
//       react(),
//       viteStaticCopy({
//         targets: [
//           {
//             src: 'src/assets/**/*.svg', // 모든 서브폴더를 포함한 src/assets 내의 모든 SVG 파일
//             dest: 'assets', // dist/assets 폴더로 복사
//           },
//         ],
//       }),
//     ],
//     base: '/',
//     server: {
//       host: true,
//       proxy: {
//         '/api': {
//           target: loadEnv(mode, process.cwd(), '').VITE_OPEN_API_URL,
//           changeOrigin: true,
//           rewrite: (path) => path.replace(/^\/api/, ''),
//           secure: false,
//           ws: true,
//         },
//       },
//     },
//     resolve: {
//       alias: [
//         { find: '@', replacement: '/src' },
//         { find: '@assets', replacement: '/src/assets' },
//         { find: '@components', replacement: '/src/components' },
//         { find: '@constant', replacement: '/src/constant' },
//         { find: '@hooks', replacement: '/src/hooks' },
//         { find: '@api', replacement: '/src/api' },
//         { find: '@context', replacement: '/src/context' },
//         { find: '@services', replacement: '/src/services' },
//         { find: '@pages', replacement: '/src/pages' },
//         { find: '@routes', replacement: '/src/routes' },
//         { find: '@schema', replacement: '/src/schema' },
//         { find: '@styles', replacement: '/src/styles' },
//         { find: '@utils', replacement: '/src/utils' },
//         { find: '@states', replacement: '/src/states' },
//       ],
//     },
//   };
//   return defineConfig(config);
// };
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 환경 변수 로드
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/**/*.svg', // 모든 서브폴더를 포함한 src/assets 내의 모든 SVG 파일
            dest: 'assets', // dist/assets 폴더로 복사
          },
        ],
      }),
    ],
    base: '/',
    server: {
      host: true,
      port: parseInt(env.VITE_PORT) || 5173, // 환경 변수에서 포트를 가져오거나 기본값 5173 사용
      proxy: {
        '/api': {
          target: env.VITE_OPEN_API_URL, // 프록시 대상 URL을 환경 변수에서 가져옴
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constant': path.resolve(__dirname, 'src/constant'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@schema': path.resolve(__dirname, 'src/schema'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@states': path.resolve(__dirname, 'src/states'),
      },
    },
  });
};
