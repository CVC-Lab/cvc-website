// Suppress webpack cache warnings in development
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()
  
  // Disable webpack cache warnings
  if (stage === 'develop' || stage === 'develop-html') {
    // Override the default cache settings
    config.cache = {
      type: 'filesystem',
      compression: false,
      store: 'pack',
      buildDependencies: {
        config: [__filename],
      },
      // Increase the threshold for warnings
      maxMemoryGenerations: Infinity,
      memoryCacheUnaffected: true,
      // Disable serialization warnings
      profile: false,
    }
    
    // Suppress infrastructure logging warnings
    config.infrastructureLogging = {
      level: 'error',
      debug: false,
    }
    
    // Replace the entire config
    actions.replaceWebpackConfig(config)
  }
}