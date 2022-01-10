module.exports = {
    extends: ['stylelint-config-recommended'],
    rules: {
      indentation: 2,
      'block-no-empty': true,
      'block-opening-brace-space-before': 'always',
      'color-hex-case': 'lower',
      'color-hex-length': 'short',
      'length-zero-no-unit': true,
      'number-no-trailing-zeros': true,
      'selector-max-id': 0,
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['/^v-/', 'pseudo-element'],
        },
      ],
      'string-quotes': 'single',
      'declaration-no-important': true,
      'block-closing-brace-empty-line-before': 'never',
      'no-missing-end-of-source-newline': true,
      'property-no-vendor-prefix': true,
      'max-empty-lines': 1,
      'rule-empty-line-before': [
        'always-multi-line',
        {
          except: ['first-nested'],
          ignore: ['after-comment'],
        },
      ],
      'at-rule-empty-line-before': [
        'always',
        {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment'],
        },
      ],
      'selector-no-vendor-prefix': true,
      'comment-whitespace-inside': 'always',
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['mixin', 'include', 'use', 'debug'],
        },
      ],
      'selector-class-pattern': '^[a-z]+(-[a-z]+)*$',
    },
  }
  