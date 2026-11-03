// الأسئلة الشائعة: فتح وإغلاق (سؤال واحد مفتوح في كل مرة)
document.querySelectorAll('.faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(function (other) {
      other.classList.remove('open');
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// إخفاء الصور غير الموجودة بدل ظهور أيقونة مكسورة
document.querySelectorAll('img').forEach(function (img) {
  function hide() { img.classList.add('missing'); }
  if (img.complete && img.naturalWidth === 0) hide();
  img.addEventListener('error', hide);
});
