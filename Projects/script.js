    document.getElementById('riskCalculator').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const likelihood = parseInt(document.getElementById('likelihood').value);
    const impact = parseInt(document.getElementById('impact').value);
  
    // Validate inputs
    if (isNaN(likelihood) || isNaN(impact) || likelihood < 1 || likelihood > 10 || impact < 1 || impact > 10) {
      alert('Please enter valid values for likelihood and impact (1-10).');
      return;
    }
  
    // Calculate risk rating
    const riskRating = likelihood * impact;
  
    // Update progress bar and result
    const progressBar = document.getElementById('progress');
    const riskLevelText = document.getElementById('riskLevelText');
    const riskDescription = document.getElementById('riskDescription');
  
    progressBar.style.width = `${(riskRating / 100) * 100}%`;
  
    let riskLevel = '';
    let description = '';
    if (riskRating <= 20) {
      riskLevel = 'Low Risk';
      description = 'This risk is acceptable and requires no additional action.';
      progressBar.style.backgroundColor = '#28a745';
    } else if (riskRating <= 50) {
      riskLevel = 'Medium Risk';
      description = 'This risk should be mitigated if possible.';
      progressBar.style.backgroundColor = '#ffc107';
    } else {
      riskLevel = 'High Risk';
      description = 'This risk requires immediate attention and mitigation.';
      progressBar.style.backgroundColor = '#dc3545';
    }
  
    riskLevelText.textContent = `Risk Level: ${riskLevel}`;
    riskDescription.textContent = description;
  });
  
  // Reset functionality
  document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('likelihood').value = '';
    document.getElementById('impact').value = '';
    document.getElementById('progress').style.width = '0';
    document.getElementById('riskLevelText').textContent = '';
    document.getElementById('riskDescription').textContent = '';
  });